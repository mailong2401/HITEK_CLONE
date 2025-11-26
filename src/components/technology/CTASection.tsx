// components/technology/CTASection.tsx
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-12 text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn sàng triển khai dự án với công nghệ hiện đại?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Liên hệ với chúng tôi để được tư vấn giải pháp công nghệ phù hợp nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/HITEK_CLONE#contact">
              <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Liên hệ ngay
              </button>
            </Link>
            <Link to="/HITEK_CLONE#projects">
              <button className="border border-background px-8 py-3 rounded-lg font-semibold hover:bg-background/10 transition-colors">
                Xem dự án
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
