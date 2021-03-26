import Date from '@/components/Date'
import data from '../data.json'

export async function getInvoices() {
  return data
}

export async function getInvoicesSortedByPaymentDue() {
  return data.sort((a, b) => new Date(a) - new Date(b))
}