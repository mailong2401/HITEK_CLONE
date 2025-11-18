import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn sàng triển khai dự án?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn giải pháp phù hợp nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/HITEK_CLONE#contact">
              <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Liên hệ tư vấn
              </button>
            </Link>
            <a href="tel:+842435355369">
              <button className="border border-background px-8 py-3 rounded-lg font-semibold hover:bg-background/10 transition-colors">
                Gọi ngay: 024 3535 5369
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;