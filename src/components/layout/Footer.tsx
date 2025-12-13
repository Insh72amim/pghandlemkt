export function Footer() {
  return (
    <footer className="border-t border-stroke bg-white py-12 text-center text-sm text-body">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-semibold text-black">
          © {new Date().getFullYear()} PGHandle. India's most loved PG management software.
        </p>
        <p className="mt-2">Made with ❤️ in India for Indian PG owners.</p>
      </div>
    </footer>
  );
}
