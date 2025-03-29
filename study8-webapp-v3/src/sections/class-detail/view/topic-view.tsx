import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import { red, blue, green } from '@mui/material/colors';

import { Iconify } from 'src/components/iconify';

import { PostItem } from '../topic-item';

const assignments = [
  { id: 1, title: 'Bài tập Toán', deadline: '2025-04-01' },
  { id: 2, title: 'Bài tập Lý', deadline: '2025-04-03' },
];

export function TopicView() {
  return (
    <Grid container spacing={1}>
      {/* Cột thông tin lớp học */}
      <Grid item xs={12} sm={3} order={{ xs: 0, sm: 0 }}>
        <Box
          sx={{
            position: 'sticky',
            top: 80,
            p: 2,
            mb: 2,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" fontWeight={500} sx={{ mb: 1 }}>
            Ma lop
          </Typography>
          <Typography variant="h5" color={blue[500]}>
            ABCDEFGHHG
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 1 }} // Khoảng cách phía trên
            onClick={() => alert('Mời tham gia lớp học!')} // Gọi API hoặc xử lý sự kiện ở đây
          >
            Mời tham gia lớp học
          </Button>
        </Box>

        <Box
          sx={{
            position: 'sticky',
            top: 235,
            p: 2,
            mb: 2,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'left',
            maxHeight: 250, // Giới hạn chiều cao
            overflowY: 'auto', // Cuộn nếu quá dài
          }}
        >
          <Typography variant="body1" fontWeight={500} mb={1} textAlign="center">
            Bài tập
          </Typography>
          {assignments.map((assignment) => (
            <Box
              key={assignment.id}
              sx={{
                p: 1,
                borderBottom: '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography variant="body1" fontWeight={500}>
                  {assignment.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hạn: {assignment.deadline}
                </Typography>
              </Box>
                <IconButton
                    size="small"
                    onClick={() => alert(`Xem bài tập: ${assignment.title}`)}
                >
                    <Iconify icon="mdi:eye" width="24px" color="#1976d2" />
                </IconButton>
            </Box>
          ))}
        </Box>
      </Grid>

      {/* Nội dung chính */}
      <Grid item xs={12} sm={9}>
        <Box
          component="section"
          sx={{
            p: 2,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            direction={{ xs: 'row', sm: 'row' }}
            wrap="nowrap"
          >
            {/* Avatar người dùng */}
            <Grid item>
              <Avatar sx={{ width: 48, height: 48 }}>U</Avatar>
            </Grid>

            {/* Ô nhập bài viết */}
            <Grid item sx={{ flexGrow: 1 }}>
              <TextField
                fullWidth
                placeholder="Bạn đang nghĩ gì?"
                variant="outlined"
                size="small"
                multiline
                minRows={1}
                maxRows={5}
              />
            </Grid>

            {/* Nút đăng bài */}
            <Grid item>
              <Button variant="contained" color="primary">
                Đăng
              </Button>
            </Grid>
          </Grid>

          {/* Thanh công cụ: Ảnh/Video - Tài liệu - Sự kiện */}
          <Grid container spacing={3} sx={{ mt: 2 }} justifyContent="center">
            <Grid item>
              <Button
                color="inherit"
                startIcon={
                  <Iconify icon="material-symbols:image-outline" sx={{ color: blue[500] }} />
                }
              >
                <Typography variant="body2" fontWeight={500}>
                  Ảnh/Video
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="inherit"
                startIcon={<Iconify icon="mdi:file-document-outline" sx={{ color: green[500] }} />}
              >
                <Typography variant="body2" fontWeight={500}>
                  Tài liệu
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="inherit"
                startIcon={<Iconify icon="mdi:calendar-clock" sx={{ color: red[500] }} />}
              >
                <Typography variant="body2" fontWeight={500}>
                  Sự kiện
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Danh sách bài viết */}
        <Box sx={{ mt: 2 }}>
          <PostItem />
          <PostItem />
          <PostItem />
        </Box>
      </Grid>
    </Grid>
  );
}
