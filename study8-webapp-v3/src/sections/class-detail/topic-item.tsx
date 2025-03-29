import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { red, blue, green } from '@mui/material/colors';

import { Iconify } from 'src/components/iconify';

export function PostItem() {
    return (
        <Card sx={{ mb: 2, borderRadius: 2, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    {/* Avatar & Tên người dùng */}
                    <Grid item>
                        <Avatar sx={{ width: 48, height: 48 }}>U</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="subtitle1" fontWeight={600}>
                            Nguyễn Văn A
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            5 phút trước
                        </Typography>
                    </Grid>
                </Grid>

                {/* Nội dung bài viết */}
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Test test teste
                </Typography>

                {/* Ảnh bài viết */}
                <CardMedia
                    component="img"
                    height="250"
                    image="https://viettuhaiprinting.vn/Image/Picture/VTH-News/nhung-cau-noi-hay-ve-uoc-mo-stt-uoc-mo-y-nghia-nh-8.jpg"
                    alt="Hình ảnh bài viết"
                    sx={{ mt: 1, borderRadius: 1 }}
                />
            </CardContent>

            {/* Nút tương tác */}
            <CardActions>
                <IconButton sx={{ color: red[500] }}>
                    <Iconify icon="mdi:heart-outline" width={24} />
                </IconButton>
                <Typography variant="body2">123</Typography>

                <IconButton sx={{ color: blue[500] }}>
                    <Iconify icon="mdi:comment-outline" width={24} />
                </IconButton>
                <Typography variant="body2">45</Typography>

                <IconButton sx={{ color: green[500] }}>
                    <Iconify icon="mdi:share-outline" width={24} />
                </IconButton>
            </CardActions>
        </Card>
    );
}
