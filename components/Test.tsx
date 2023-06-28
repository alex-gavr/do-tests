'use client';

import production from "@utils/isProd";
import { use } from "react";

interface ITestProps {}

const devUrl = '/track';
const prodUrl = `${process.env.NEXT_PUBLIC_MARKER_DOMAIN}/track`;
const url = production ? prodUrl : devUrl;
const track = fetch(url).then(res => res.json()).catch(err => console.log(err));

const Test = ({}: ITestProps) => {
  const trackRes = use(track);
  console.log('trackRes:', trackRes)

  return null;
};

export default Test;
