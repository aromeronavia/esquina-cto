<template>
  <div class="w-full">
    <nav
      class="h-24 flex items-center justify-between px-9 py-4 border-b border-gray-200 fixed w-screen bg-white"
    >
      <Logo />
      <ul class="invisible text-xl sm:visible">
        <li class="inline-block mr-8">
          <a href="#nosotros">Quienes Somos</a>
        </li>
        <li class="inline-block mr-8">
          <a href="#contacto">Contacto</a>
        </li>
        <li class="inline-block font-bold text-primary">
          <a href="https://www.linkedin.com/groups/12533842/" target="_blank"
            >Únete al grupo</a
          >
        </li>
      </ul>
      <div class="text-xl sm:hidden">
        <div
          v-if="!isMenuOpen"
          class="cursor-pointer"
          @click="isMenuOpen = true"
        >
          <div class="w-8 h-1 mt-1 bg-black" />
          <div class="w-8 h-1 mt-1 bg-black" />
          <div class="w-8 h-1 mt-1 bg-black" />
        </div>
        <ul
          v-if="isMenuOpen"
          class="w-screen fixed left-0 top-0 bg-blue-100 pb-10 text-center"
        >
          <div
            class="w-8 h-8 bg-primary text-white text-center rounded-full cursor-pointer absolute right-1 top-1"
            @click="isMenuOpen = false"
          >
            x
          </div>
          <li
            @click="isMenuOpen = false"
            class="text-black mt-4 hover:underline"
          >
            <a href="#nosotros">Quienes Somos</a>
          </li>
          <li
            @click="isMenuOpen = false"
            class="text-black mt-4 hover:underline"
          >
            <a href="#contacto">Contacto</a>
          </li>
          <li
            @click="isMenuOpen = false"
            class="text-black mt-4 hover:underline"
          >
            <a href="https://www.linkedin.com/groups/12533842/" target="_blank"
              >Únete al grupo</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <section class="pt-32 mb-12 sm:ml-11 xl:mb-32">
      <h1 class="text-3xl text-center mx-4 sm:ml-4 sm:text-left lg:w-1/3">
        Somos una comunidad que reúne líderes de tecnología en México
      </h1>
      <!-- Mobile View -->
      <div
        class="mt-11 grid grid-cols-2 content-center visible sm:grid-cols-4 lg:hidden"
      >
        <Member
          v-for="member in members"
          class="mb-6 mx-auto inline-block sm:block"
          :key="member.name"
          :imageUrl="member.imageUrl"
          :name="member.name"
          :position="member.position"
          :company="member.company"
        />
      </div>
      <!-- Desktop View -->
      <div class="hidden lg:flex lg:items-center">
        <div class="mt-11 flex flex-wrap w-2/3">
          <Member
            v-for="member in members"
            class="mr-6 mb-6 inline-block lg:block"
            :key="member.name"
            :imageUrl="member.imageUrl"
            :name="member.name"
            :position="member.position"
            :company="member.company"
          />
        </div>
        <SeeMore class="hidden lg:block inline" />
      </div>
      <SeeMore class="mt-2 lg:hidden" />
    </section>
    <section
      id="nosotros"
      class="w-full bg-primary text-white pt-12 sm:py-12 lg:grid lg:grid-cols-2"
    >
      <ul class="text-center mx-5 hidden lg:block lg:mx-0 lg:ml-8">
        <li class="text-xl lg:text-3xl w-full lg:w-1/2 lg:ml-4">
          Compartimos conocimientos y experiencia de cómo hacer tecnología
        </li>
        <li class="text-xl w-full lg:w-1/2 lg:mt-20 lg:ml-4 lg:text-3xl">
          Buscamos tener un impacto positivo en la vida de las personas que nos
          rodean
        </li>
        <li class="text-xl w-full lg:w-1/2 lg:mt-20 lg:ml-4 lg:text-3xl">
          Nos reunimos para resolver problemas de diferentes maneras
        </li>
      </ul>
      <div class="w-full lg:pr-32 lg:mt-0">
        <p class="text-xl text-center mb-8 lg:text-2xl">
          Fundadores de Esquina CTO
        </p>
        <div class="flex justify-around mx-3 lg:mx-0">
          <Member
            class="mr-2 sm:mr-8"
            name="Alberto Romero"
            imageUrl="https://media-exp1.licdn.com/dms/image/C4D03AQGrpxlB5HsmCg/profile-displayphoto-shrink_800_800/0/1594865592548?e=1628121600&v=beta&t=-Quy4NvRzzJ1BvRq59P5tn0OS6kxNNFYjLiaSHlWIfE"
            position="Engineering Lead"
            company="JungleScout"
          />
          <Member
            name="Aaron Munguia"
            imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQFXGgwmGFadmA/profile-displayphoto-shrink_800_800/0/1612370028700?e=1628121600&v=beta&t=Zya7-vExedCFsp_MPa_U978tCggYTqz-Ohlubh8ipnA"
            position="CTO"
            company="Tu Identidad"
          />
        </div>
        <p
          class="px-8 mt-9 pb-12 w-full text-center text-justify md:mx-auto md:w-1/2 md:px-0 md:pb-0 lg:w-full lg:mx-auto"
        >
          “Nos juntamos el último jueves de cada mes a discutir temas de
          relevancia en nuestros puestos, tales como Product Management, People
          Management, Procesos de Desarrollo, Trabajo Remoto, etc., hasta temas
          como Seguridad Cibernética, Bases de datos, Escalabilidad,
          Certificaciones SOC2/PCI, entre otros temas."
        </p>
      </div>
    </section>

    <section id="contacto" class="flex justify-center w-full py-16">
      <form
        class="w-full mx-5 bg-primary px-8 rounded-md my-12 sm:w-1/2 xl:w-1/3 sm:mx-0"
        name="contact"
        method="POST"
        netlify
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label class="pt-8 text-center text-xl block text-white"
          >¿Te interesa contactar con nosotros?</label
        >
        <input
          class="mt-9 p-2 block rounded-md w-full"
          name="name"
          type="text"
          placeholder="Nombre"
          required
        />
        <input
          class="mt-5 p-2 rounded-md block w-full"
          name="email"
          type="email"
          placeholder="email@example.com"
          required
        />
        <textarea
          class="mt-5 p-2 rounded-md block w-full resize-none"
          name="message"
          rows="3"
          placeholder="Hola!"
          required
        />
        <button
          class="w-1/2 bg-white text-primary mt-8 p-2 rounded-md block text-center mx-auto mb-10"
          type="submit"
          value="Send Message"
        >
          Enviar
        </button>
      </form>
    </section>
    <footer class="bg-primary text-white w-full">
      <p class="py-4 text-center">
        Encuentranos en
        <a class="underline" href="https://www.linkedin.com/groups/12533842/">
          LinkedIn!
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data: function() {
    const sampleMember = {
      name: "Alberto Romero",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGrpxlB5HsmCg/profile-displayphoto-shrink_800_800/0/1594865592548?e=1628121600&v=beta&t=-Quy4NvRzzJ1BvRq59P5tn0OS6kxNNFYjLiaSHlWIfE",
      position: "Engineering Lead",
      company: "JungleScout"
    };

    const members = [
      {
        name: "Omar Baqueiro",
        imageUrl:
          "https://ca.slack-edge.com/TTDGSHWAZ-UT3BYHE49-gcf9a7442ead-512",
        position: "VP of Engineering"
      },
      {
        name: "Genaro Madrid",
        imageUrl:
          "https://ca.slack-edge.com/TTDGSHWAZ-UTDHDR5HT-1e7b405a58c1-512",
        position: "CTO",
        company: "MiFiel"
      },
      {
        name: "Andres Vejar",
        imageUrl:
          "https://ca.slack-edge.com/TTDGSHWAZ-UTFPDDE6A-37d85faea4df-512",
        position: "CIO",
        company: "Neubox"
      },
      {
        name: "Manuel de la Torre",
        imageUrl:
          "https://ca.slack-edge.com/TTDGSHWAZ-UT0SML3DY-4ba82f51baec-512",
        position: "Head of Product",
        company: "Zenfi"
      },
      {
        name: "Abiee Echamea",
        imageUrl:
          "https://ca.slack-edge.com/TTDGSHWAZ-U018PPLJG2D-ga48b9837730-512",
        position: "CTO",
        company: "100 Ladrillos"
      },
      {
        name: "Carlos González",
        imageUrl:
          "https://ca.slack-edge.com/TTDGSHWAZ-U014ELJPX2T-28552529420f-512",
        position: "CTO",
        company: "100 Ladrillos"
      },
      {
        name: "Josue Padilla",
        imageUrl:
          "https://ca.slack-edge.com/TTDGSHWAZ-U01DB6XU7HV-2aa41fa4960f-512",
        position: "Infrastructure Engineer",
        company: "Thredup"
      },
      {
        name: "Cesar Díaz",
        imageUrl:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHSrOGttc-VBg/profile-displayphoto-shrink_800_800/0/1516904317257?e=1628121600&v=beta&t=7UHbONqUOY3n9yE-cQNthmI1bYUMskL5Io7_s1WJaQU",
        position: "CTO",
        company: "Bowhead Health"
      },
      {
        name: "Javier Coca",
        imageUrl:
          "https://ca.slack-edge.com/TTDGSHWAZ-UTVG91Y2J-bec34b773f45-512",
        position: "Executive Advisor - Engineering Director"
      },
      {
        name: "Luis Elizondo",
        imageUrl:
          "https://ca.slack-edge.com/TTDGSHWAZ-UT4USLQ1X-gb07051f8281-512",
        position: "CTO",
        company: "Rever"
      }
    ];

    return {
      isMenuOpen: false,
      members: members.sort(() => Math.random() - 0.5)
    };
  }
};
</script>
