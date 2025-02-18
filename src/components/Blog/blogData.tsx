import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Nouveau Projet : Soutien aux Orphelins",
    paragraph:
      "Nous avons lancé un nouveau projet pour offrir un environnement sûr et éducatif aux orphelins. Découvrez comment vous pouvez nous aider.",
    image: "/images/blog/orphelins.jpg", // Remplacez par le chemin de votre image
    author: {
      name: "Akonda Munse Ornella",
      image: "/images/blog/auteur-ornella.png", // Remplacez par le chemin de l'image de l'auteur
      designation: "Fondatrice de la Hikani Fondation",
    },
    tags: ["Enfants"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Célébration de Noël avec les Sans-Abris",
    paragraph:
      "Nous avons organisé une célébration de Noël pour les sans-abris, offrant des repas chauds et des vêtements. Retour sur cet événement mémorable.",
    image: "/images/blog/noel-sans-abris.jpg", // Remplacez par le chemin de votre image
    author: {
      name: "Priscille Mibanga",
      image: "/images/blog/auteur-priscille.png", // Remplacez par le chemin de l'image de l'auteur
      designation: "Présidente AI de la Fondation",
    },
    tags: ["Solidarité"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Formation pour les Veuves",
    paragraph:
      "Nous avons lancé un programme de formation pour aider les veuves à acquérir des compétences professionnelles et à retrouver leur autonomie.",
    image: "/images/blog/formation-veuves.jpg", // Remplacez par le chemin de votre image
    author: {
      name: "Jean Dupont",
      image: "/images/blog/auteur-jean.png", // Remplacez par le chemin de l'image de l'auteur
      designation: "Bénévole et Donateur",
    },
    tags: ["Autonomie"],
    publishDate: "2024",
  },
];
export default blogData;
