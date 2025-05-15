import FormElements from "./FormElements";

function CompanyForm() {
  return (
    <section className="w-full bg-white rounded-2xl border border-solid border-pink-950/20 mt-6 md:mt-11">
      <div className="p-4 md:p-6">
        <div className="space-y-6 md:space-y-8">
          <FormElements.DiscountSection />
          <hr className="border-t border-slate-200" />
          <FormElements.InternationalShipping />
          <hr className="border-t border-slate-200" />
          <FormElements.LocalShipping />
        </div>
      </div>
    </section>
  );
}

export default CompanyForm;
