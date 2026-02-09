export default function Footer() {
  return (
    <footer className="mt-24 border-t py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Morning Coffee Music. All rights reserved.
    </footer>
  );
}