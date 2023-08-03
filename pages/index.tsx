import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import ComingSoon from '../src/components/ComingSoon';
import Header from '@/components/Header'

export default function Home() {
  return (<div>
    <Header />
    <ComingSoon />
  </div>
  );
}
