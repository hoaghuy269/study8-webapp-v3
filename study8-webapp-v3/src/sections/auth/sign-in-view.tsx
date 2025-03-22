import { t } from 'i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';

import apiService from '../../services/api-service';
import ErrorAlert from "../../components/alert/message-alert";

// ----------------------------------------------------------------------

export function SignInView() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [openAlert, setOpenAlert] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  type FormData = {
    email: string;
    password: string;
  };

  const handleSignIn = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await apiService.post('/auth/login', {
        username: data.email,
        password: data.password,
      });

      if (response.data.statusCode === 200) {
        localStorage.setItem('token', response.data.data.token);
        router.push('/');
      }
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'Đăng nhập thất bại');
      setOpenAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ErrorAlert open={openAlert} message={errorMessage} onClose={() => setOpenAlert(false)} />

      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">{t('text.signIn')}</Typography>
        <Typography variant="body2" color="text.secondary">
          {t('text.dontHaveAccount')}
          <Link variant="subtitle2" sx={{ ml: 0.5 }}>
            {t('text.getStarted')}
          </Link>
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <TextField
            fullWidth
            label={t('text.email')}
            placeholder="mail@email.com"
            InputLabelProps={{ shrink: true }}
            {...register('email', { required: t('error.emailRequired') })}
            error={!!errors.email}
            helperText={errors.email?.message as string}
            sx={{ mb: 3 }}
          />

          <Link variant="body2" color="inherit" sx={{ mb: 1.5 }}>
            {t('text.forgotPassword')}
          </Link>

          <TextField
            fullWidth
            label={t('text.password')}
            placeholder="••••••••"
            InputLabelProps={{ shrink: true }}
            type={showPassword ? 'text' : 'password'}
            {...register('password', { required: t('error.passwordRequired') })}
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

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="contained"
            loading={loading}
          >
            {t('button.signIn')}
          </LoadingButton>
        </Box>
      </form>

      <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}
        >
          {t('text.or')}
        </Typography>
      </Divider>

      <Box gap={1} display="flex" justifyContent="center">
        <IconButton color="inherit">
          <Iconify icon="logos:google-icon" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify icon="eva:github-fill" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify icon="ri:twitter-x-fill" />
        </IconButton>
      </Box>
    </>
  );
}
