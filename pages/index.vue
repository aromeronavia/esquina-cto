<template>
  <div class="w-full">
    <nav
      class="h-24 flex items-center justify-between px-9 py-4 border-b border-gray-200"
    >
      <Logo />
      <ul class="text-xl">
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
    </nav>
    <section class="mt-10 ml-11 mb-24">
      <h1 class="text-3xl ml-4 w-1/3">
        Somos una comunidad que reúne líderes de tecnología en México
      </h1>
      <div class="flex items-center">
        <div class="mt-11 w-2/3 flex flex-wrap">
          <Member
            v-for="member in members"
            class="mr-6 mb-6"
            :key="member.name"
            :imageUrl="member.imageUrl"
            :name="member.name"
            :position="member.position"
            :company="member.company"
          />
        </div>
        <SeeMore class="inline" />
      </div>
    </section>
    <section
      id="nosotros"
      class="flex w-full h-screen bg-primary text-white pt-24"
    >
      <div class="ml-8">
        <h1 class="text-3xl ml-4 w-1/2">
          Compartimos conocimientos y experiencia de cómo hacer tecnología
        </h1>
        <h1 class="mt-20 text-3xl ml-4 w-1/2">
          Buscamos tener un impacto positivo en la vida de las personas que nos
          rodean
        </h1>
        <h1 class="mt-20 text-3xl ml-4 w-1/2">
          Nos reunimos para resolver problemas de diferentes maneras
        </h1>
      </div>
      <div class="w-1/2 pr-32">
        <div class="flex justify-around">
          <Member
            class="mr-8"
            name="Alberto Romero"
            imageUrl="https://media-exp1.licdn.com/dms/image/C4D03AQGrpxlB5HsmCg/profile-displayphoto-shrink_800_800/0/1594865592548?e=1628121600&v=beta&t=-Quy4NvRzzJ1BvRq59P5tn0OS6kxNNFYjLiaSHlWIfE"
            position="Engineering Lead"
            company="JungleScout"
          />
          <Member
            name="Aaron Munguia"
            imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQFXGgwmGFadmA/profile-displayphoto-shrink_800_800/0/1612370028700?e=1628121600&v=beta&t=Zya7-vExedCFsp_MPa_U978tCggYTqz-Ohlubh8ipnA"
            position="Chief Technology Officer"
            company="Tu Identidad"
          />
        </div>
        <p class="mt-9 text-justify">
          “Nos juntamos el último jueves de cada mes a discutir temas de
          relevancia en nuestros puestos, tales como Product Management, People
          Management, Procesos de Desarrollo, Trabajo Remoto, etc., hasta temas
          como Seguridad Cibernética, Bases de datos, Escalabilidad,
          Certificaciones SOC2/PCI, entre otros. Te invito a que si tienes un
          perfil de liderazgo tecnológico y quieres aportar a nuestra comunidad,
          ¡te nos unas!”
        </p>
      </div>
    </section>

    <section id="contacto" class="flex justify-center w-full py-16">
      <form
        class="w-1/3 bg-primary px-8 rounded-md my-12"
        method="POST"
        data-netlify="true"
      >
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
        >
          Enviar
        </button>
      </form>
    </section>
    <footer class="bg-primary text-white w-full">
      <p class="py-4 text-center">
        Encuentranos en
        <a class="underline" href="https://www.linkedin.com/groups/12533842/">
          LinkedIn!</a
        >
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

    return {
      members: [
        Object.assign({}, sampleMember),
        Object.assign({}, sampleMember),
        Object.assign({}, sampleMember),
        Object.assign({}, sampleMember),
        Object.assign({}, sampleMember),
        Object.assign({}, sampleMember),
        Object.assign({}, sampleMember),
        Object.assign({}, sampleMember),
        Object.assign({}, sampleMember),
        Object.assign({}, sampleMember)
      ]
    };
  }
};
</script>
