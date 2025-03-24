import { useTranslation } from 'react-i18next';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';

import { _posts } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

import { PostItem } from '../component/post-item';
import { PostSort } from '../component/post-sort';
import { PostSearch } from '../component/post-search';

// ----------------------------------------------------------------------

export function ClassView() {
  const [sortBy, setSortBy] = useState('latest');
  const { t } = useTranslation();

  const handleSort = useCallback((newSort: string) => {
    setSortBy(newSort);
  }, []);

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          {t('text.class')}
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          {t('button.createClass')}
        </Button>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
        <PostSearch posts={_posts} />
        <PostSort
          sortBy={sortBy}
          onSort={handleSort}
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </Box>

      <Grid container spacing={3}>
        {_posts.map((post) => (
          <Grid key={post.id} xs={12} sm={6} md={3}>
            <PostItem post={post}  latestPost={false} latestPostLarge={false}/>
          </Grid>
        ))}
      </Grid>

      <Pagination count={10} color="primary" sx={{ mt: 8, mx: 'auto' }} />
    </DashboardContent>
  );
}
