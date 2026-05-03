import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { Suspense } from "react";

async function FormWrapper() {
  const customers = await fetchCustomers();
  return <Form customers={customers} />;
}

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <Suspense
        fallback={
          <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"></svg>
        }
      >
        <FormWrapper />
      </Suspense>
    </main>
  );
}
