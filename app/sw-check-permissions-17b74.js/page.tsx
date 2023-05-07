import Script from 'next/script';

interface IPageProps {}

const Page = ({}: IPageProps) => {
  return (
    <Script>
      {`function getYmid() {
            try {
                return new URL(location.href).searchParams.get('ymid');
            } catch (e) {
                console.warn(e);
            }
            return null;
        }
        function getVar() {
            try {
                return new URL(location.href).searchParams.get('var');
            } catch (e) {
                console.warn(e);
            }
            return null;
        }
        self.options = {
            "domain": "deefauph.com",
            "resubscribeOnInstall": true,
            "zoneId": 5931129,
            "ymid": getYmid(),
            "var": getVar()
        }
        self.lary = "";
        importScripts('https://deefauph.com/pfe/current/sw.perm.check.min.js?r=sw');
        `}
    </Script>
  );
};

export default Page;
