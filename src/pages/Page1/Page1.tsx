import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Page1() {
  return (
    <>
      <Meta title="page 1" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Page 1</Typography>
        <oryx-rating value="4" characters="😡😔😐😀🤩"></oryx-rating>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page1;
