import { useTranslation } from 'react-i18next';

import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const useNavData = () => {
  const { t } = useTranslation();

  return [
    {
      title: t('text.dashboard'),
      path: '/',
      icon: icon('ic-analytics'),
    },
    {
      title: t('text.class'),
      path: '/class',
      icon: icon('ic-class'),
    },
    {
      title: t('text.user'),
      path: '/user',
      icon: icon('ic-user'),
    },
    {
      title: t('text.product'),
      path: '/products',
      icon: icon('ic-cart'),
      info: (
        <Label color="error" variant="inverted">
          +3
        </Label>
      ),
    },
    {
      title: t('text.blog'),
      path: '/blog',
      icon: icon('ic-blog'),
    },
    {
      title: t('text.sign_in'),
      path: '/sign-in',
      icon: icon('ic-lock'),
    },
    {
      title: t('text.not_found'),
      path: '/404',
      icon: icon('ic-disabled'),
    },
  ];
};
