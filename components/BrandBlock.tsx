import BeeLogo from "@/components/BeeLogo";

export default function PressBar() {
  return (
    <div className="flex flex-row gap-8 place-items-center">
      <a href="/">
        <BeeLogo width={67} height={67} />
      </a>
      <a href="/">
        <span className="flex text-3xl">Bee Orchid Press Books</span>
      </a>
    </div>
  );
}
