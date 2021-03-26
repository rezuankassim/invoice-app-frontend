export default function Currency({amount}) {
  let formatter = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP'
  })

  return (
    <span>{formatter.format(amount).replace(/^(\D+)/, '$1 ')}</span>
  )
}