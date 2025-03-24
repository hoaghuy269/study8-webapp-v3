import {t} from "i18next";
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {ClassView} from "../sections/class/view";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
        <Helmet>
            <title>{`${t('text.class')} - ${CONFIG.appName}`}</title>
        </Helmet>

        <ClassView />
    </>
  );
}
