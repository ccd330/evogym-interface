import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Vinyasa Flow",
        description:
        "Vinyasa is characterized by flowing poses and sequences that are linked to the breath. This class is diverse and sequencing will vary with instructor philosophy and in general is a vigorous, more athletic approach to yoga.",
        image: image1,
    },
    {
        name: "Restorative Vinyasa",
        description:
        "Restorative yoga is a deeply relaxing way of practicing yoga. Given props, the student achieves poses without much muscular strength, facilitating deep release in the connective tissue and calming the nervous system. Teachers may offer a meditative focus.",
        image: image2,
    },
    {
        name: "Hot Yoga",
        description:
        "Taught in the heated room, this style works through poses and sequences linked to breath. Sequencing will vary with instructor philosophy in this vigorous and fluid approach to yoga. Room is heated to 90 degrees.",
        image: image3,
    },
    {
        name: "Prenatal Yoga",
        description:
        "Much like other types of childbirth-preparation classes, prenatal yoga is a multifaceted approach to exercise that encourages stretching, mental centering and focused breathing.",
        image: image4,
    },
    {
        name: "Meditation",
        description:
        "Yoga and meditation work quite well together. Each benefits the other. The clarity you get from meditation enhances your ability to stay present in yoga.",
        image: image5,
    },
    ];

    type Props = {
        setSelectedPage: (value: SelectedPage) => void;
    };

    const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
            <div className="md:w-3/5">
                <HText>OUR CLASSES</HText>
                <p className="py-5">
                    Over 100 weekly classes across 20 yoga styles including vinyasa, hot yoga and meditation.
                </p>
            </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
        </section>
    );
};

export default OurClasses;