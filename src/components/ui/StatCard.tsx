import Card from "./Card";

export default function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <Card className="border border-brand-gray-100 shadow-none hover:shadow-md transition-shadow">
      <h3 className="text-2xl lg:text-3xl font-bold text-brand-gray-900 whitespace-pre-line leading-tight">
        {value}
      </h3>
      <p className="mt-2 text-sm text-brand-gray-600">{label}</p>
    </Card>
  );
}
