import Script from 'next/script'

function BaiduAnalytics() {
  return (
    <Script
      id="baidu-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?affae2ecea3eed6047e81d63e53ba0f5";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            })();
    `,
      }}
    />
  )
}

export default BaiduAnalytics
