import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { CONFIG } from 'src/config-global';

import {SignInView} from "../sections/auth/sign-in/view";

// ----------------------------------------------------------------------

export default function Page() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{`${t('text.signIn')} - ${CONFIG.appName}`}</title>
      </Helmet>

      <SignInView />
    </>
  );
}
