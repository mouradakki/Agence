import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ما هي الوثائق المطلوبة للتأمين على السيارات؟",
    answer: "تحتاج إلى بطاقة التسجيل (الكارت كريز)، بطاقة الهوية الوطنية، ورخصة السياقة. في بعض الحالات قد نطلب وثائق إضافية حسب نوع التأمين المطلوب.",
  },
  {
    question: "كيف يتم احتساب أقساط التأمين؟",
    answer: "يتم احتساب الأقساط بناءً على عدة عوامل منها: قيمة المركبة، عمرها، نوع الاستخدام، تاريخ السائق التأميني، والتغطيات المطلوبة. نقدم لك عرض سعر مفصل ومخصص لحالتك.",
  },
  {
    question: "هل يمكنني الحصول على تأمين للسفر في نفس اليوم؟",
    answer: "نعم، نوفر خدمة تأمين السفر الفوري. يمكنك الحصول على وثيقة التأمين في نفس يوم الطلب مع تغطية تبدأ فوراً.",
  },
  {
    question: "ما هي التغطيات المتوفرة لتأمين الشاحنات؟",
    answer: "نوفر تغطية شاملة للشاحنات تشمل: الأضرار المادية، المسؤولية المدنية، تأمين البضائع المنقولة، الحماية القانونية، وخدمات المساعدة على الطريق.",
  },
  {
    question: "كيف أقدم مطالبة تعويض؟",
    answer: "يمكنك تقديم مطالبة التعويض من خلال زيارة مكتبنا أو الاتصال بنا. نحتاج إلى التصريح بالحادث، صور الأضرار، والوثائق الداعمة. فريقنا سيرافقك في جميع مراحل المطالبة.",
  },
  {
    question: "هل تقدمون خدمات لتأمين الشركات والمؤسسات؟",
    answer: "نعم، نقدم حلول تأمينية متكاملة للشركات تشمل: تأمين الممتلكات، تأمين الموظفين، المسؤولية المهنية، وتأمين أسطول المركبات. نصمم باقات مخصصة حسب حجم ونشاط شركتك.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
              الأسئلة الشائعة
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              أسئلة متكررة
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              إليك إجابات على أكثر الأسئلة شيوعاً. إذا لم تجد إجابة سؤالك، لا تتردد في التواصل معنا.
            </p>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <h3 className="font-bold text-foreground mb-2">لديك سؤال آخر؟</h3>
              <p className="text-muted-foreground mb-4">
                فريقنا جاهز للإجابة على جميع استفساراتك
              </p>
              <a
                href="#contact"
                className="text-primary font-semibold hover:underline"
              >
                تواصل معنا الآن ←
              </a>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-right font-bold text-foreground hover:text-primary py-5 text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
