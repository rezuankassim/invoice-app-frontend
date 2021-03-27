import Date from "@/components/Date";
import data from "../data.json";

export async function getInvoices() {
  return data;
}

export async function getInvoicesSortedByPaymentDue(key) {
  const status = key.queryKey[1].status;

  return data
    .sort((a, b) => new Date(a) - new Date(b))
    .filter((value) => (status.length ? status.includes(value.status) : true));
}

export async function getInvoice(id) {
  return data.find((value) => value.id === id);
}
