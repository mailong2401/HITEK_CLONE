import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cta.ready')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/HITEK_CLONE#contact">
              <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                {t('cta.contactButton')}
              </button>
            </Link>
            <a href="tel:+842435355369">
              <button className="border border-background px-8 py-3 rounded-lg font-semibold hover:bg-background/10 transition-colors">
                {t('cta.callButton')}: 024 3535 5369
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;