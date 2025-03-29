import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import IconButton from "@mui/material/IconButton";
import { TopicView } from './topic-view';
import {Iconify} from "../../../components/iconify";

// ----------------------------------------------------------------------

export function ClassDetailView() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState("topic");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h4" flexGrow={1}>
          {t('text.class')}
        </Typography>
        <IconButton onClick={() => alert('Mở cài đặt')}>
          <Iconify icon="mdi:cog" width="28px" color="#000" />
        </IconButton>
      </Box>
      <Box sx={{ maxWidth: '100%' }}>
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons={false}>
            <Tab label={t('text.topic')} value="topic" />
            <Tab label={t('text.document')} />
          </Tabs>
          <TabPanel value="topic" sx={{ p: 0, mt: 3 }}>
            <TopicView />
          </TabPanel>
        </TabContext>
      </Box>
    </DashboardContent>
  );
}
