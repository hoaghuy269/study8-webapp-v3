import { t } from 'i18next';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { LoadingButton } from '@mui/lab';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, Tooltip, debounce, TextField, Autocomplete, CircularProgress } from '@mui/material';

import { registerSubmit } from '../service';
import { useToast } from '../../../../hooks/use-toast';
import { Iconify } from '../../../../components/iconify';
import apiService from '../../../../services/api-service';
import { useLoading } from '../../../../hooks/use-loading';
import { AUTH } from '../../../../constants/pattern-constant';
import { TOAST_SEVERITY } from '../../../../providers/toast-provider';

interface RoleOption {
  value: string;
  label: string;
}

type Props = {
  nextStep: () => void;
  id: any;
};

const RegisterForm = ({ nextStep, id }: Props) => {
  const { loading, withLoading } = useLoading();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [roleOptions, setRoleOptions] = useState<RoleOption[]>([]);
  const [loadingRoles, setLoadingRoles] = useState(false);
  const [fetchedRoles, setFetchedRoles] = useState(false);
  const [, setSearchTerm] = useState('');
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch('password');

  const fetchRoles = async (search = '') => {
    setLoadingRoles(true);
    try {
      const response = await apiService.get(
        `/api/v1/sys/public/constant?groupCode=SYSTEM_ROLE&search=${search}`
      );
      const data = response?.data?.datas || [];
      setRoleOptions(
        data.map((item: { code: any; value: any }) => ({ value: item.code, label: item.value }))
      );
      setFetchedRoles(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingRoles(false);
    }
  };

  const handleSearchChange = debounce((event: any, newInputValue: string) => {
    setSearchTerm(newInputValue);
    fetchRoles(newInputValue);
  }, 500);

  const handleSubmitForm = async (data: any) => {
    await withLoading(async () => {
      try {
        // Step 1: Call API verify OTP
        await registerSubmit(id, data.name, data.role, data.password);

        // Step 2: Go to next step
        nextStep();
      } catch (error) {
        toast?.addToast(error, TOAST_SEVERITY.ERROR);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <TextField
          fullWidth
          label={t('text.name')}
          placeholder={t('text.name')}
          InputLabelProps={{ shrink: true }}
          {...register('name', { required: t('error.nameNotEmpty') })}
          error={!!errors.name}
          helperText={errors.name?.message as string}
          sx={{ mb: 3 }}
        />

        <Controller
          name="role"
          control={control}
          rules={{ required: t('error.roleRequired') }}
          render={({ field }) => (
            <Autocomplete
              fullWidth
              filterOptions={(x) => x}
              options={roleOptions}
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(option, value) => option.value === value.value}
              onOpen={() => !fetchedRoles && fetchRoles()}
              onInputChange={handleSearchChange}
              onChange={(_, newValue) => field.onChange(newValue?.value || '')}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={t('text.role')}
                  placeholder={t('text.roleSelect')}
                  error={!!errors.role}
                  helperText={errors.role?.message as string}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: loadingRoles ? (
                      <CircularProgress size={20} />
                    ) : (
                      params.InputProps.endAdornment
                    ),
                  }}
                />
              )}
              sx={{ mb: 3 }}
            />
          )}
        />

        <Tooltip title={t('tooltip.password')} placement="top" arrow>
          <TextField
            fullWidth
            label={t('text.password')}
            placeholder="••••••••"
            InputLabelProps={{ shrink: true }}
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: t('error.passwordRequired'),
              pattern: {
                value: AUTH.PASSWORD_PATTERN,
                message: t('error.passwordInvalid'),
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message as string}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />
        </Tooltip>

        <TextField
          fullWidth
          label={t('text.retypePassword')}
          placeholder="••••••••"
          InputLabelProps={{ shrink: true }}
          type={showRePassword ? 'text' : 'password'}
          {...register('retypePassword', {
            required: t('error.retypePasswordRequired'),
            validate: (value) => value === password || t('error.retypePasswordNotMatch'),
          })}
          error={!!errors.retypePassword}
          helperText={errors.retypePassword?.message as string}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowRePassword(!showRePassword)} edge="end">
                  <Iconify icon={showRePassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="contained"
          loading={loading}
          sx={{ mb: 2 }}
        >
          {t('button.submit')}
        </LoadingButton>
      </Box>
    </form>
  );
};

export default RegisterForm;
