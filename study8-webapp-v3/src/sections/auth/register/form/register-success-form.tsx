import { t } from 'i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useRouter } from '../../../../routes/hooks';
import Iconify from '../../../../components/icon/iconify';

const RegisterSuccessForm = () => {
  const router = useRouter();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" mt={3}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 120,
          height: 120,
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 128, 0, 0.1)',
        }}
      >
        <Iconify icon="fluent:checkmark-circle-48-filled" width={100} height={100} color="green" />
      </Box>
      <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold', color: 'green' }}>
        {t('text.registerSuccess')}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
        {t('text.registerSuccessMessage')}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => router.push('/login')}
      >
        {t('button.goToLogin')}
      </Button>
    </Box>
  );
};

export default RegisterSuccessForm;
