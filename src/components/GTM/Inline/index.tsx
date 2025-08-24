const GTM_ID = 'GTM-M4B5DGJ2'
function Inline() {
  return (
    <noscript
      data-cookieconsent="statistics"
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`
      }}
    />
  )
}

export default Inline
