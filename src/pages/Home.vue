<template>
  <div style="background-color: var(--midtone)">
    <div style="height: 100vh">
      <div class="spacer"></div>
      <div class="header">
        <div class="header-text">
          <h1>Raddical Collaboration</h1>
          <h2>
            perfected struture for building and managing open <br />
            source civic tech projects
          </h2>
          <button style="background-color: var(--highlight)">
            Join a Collabathon
          </button>
          <button>
            Start a Collabathon
          </button>
        </div>
      </div>
      <img src="~@/assets/header-home.svg" class="header-img" />
      <div class="background" style="text-align: center;">
        <span class="material-icons" style="position: absolute; bottom: 20pt;">
          keyboard_arrow_down
        </span>
      </div>
    </div>
    <div style="padding: 10pt">
      <h3>Not just another hackathon</h3>
      <p1 style="text-align: center">
        Pariatur esse nisi et est et amet laborum commodo non nulla est aliqua.
        In sint deserunt proident deserunt laboris consectetur ex duis nulla
        tempor occaecat aliquip fugiat. Et culpa duis est eu labore nisi
        excepteur. Aute nostrud cillum aute qui ex ullamco. Ad anim duis sit
        adipisicing commodo non duis pariatur enim est sunt. Deserunt ad enim
        magna ea ut occaecat esse labore sint ullamco quis. Pariatur aute
        incididunt deserunt dolor qui laborum culpa ut officia incididunt elit
        duis ullamco.
      </p1>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr">
        <div class="info">
          <img src="~@/assets/leadership.png" class="img-tile" />
          <h3>
            Leadership
          </h3>
          <p1>
            Exercitation proident incididunt eu pariatur nisi non aliqua quis
            tempor dolore ipsum ipsum adipisicing. Fugiat pariatur aliquip
            reprehenderit aliqua aliquip. Sint deserunt dolore nostrud tempor
            irure reprehenderit voluptate culpa enim non sint consectetur magna
            aute. Ad Lorem qui dolore officia id deserunt excepteur exercitation
            labore. Quis anim et ut sit ut minim dolore commodo irure culpa quis
            culpa.
          </p1>
        </div>
        <div class="info">
          <img src="~@/assets/structure.png" class="img-tile" />
          <h3>
            Structure
          </h3>
          <p1>
            Dolor nostrud magna culpa laboris. Aliquip eu dolor eu exercitation
            aliqua culpa officia. Sit ad ex non incididunt sit sunt dolore
            exercitation incididunt deserunt in do ea enim. Duis in officia
            voluptate culpa nisi nulla sit qui ad quis magna consequat
            reprehenderit. Nulla incididunt eu consequat officia sint laborum
            dolor commodo eu enim fugiat do.
          </p1>
        </div>
        <div class="info">
          <img src="~@/assets/plans.png" class="img-tile" />
          <h3>
            Planning
          </h3>
          <p1>
            Pariatur minim nostrud nostrud id et pariatur mollit cupidatat.
            Occaecat ullamco duis non occaecat aliquip occaecat deserunt non
            magna. Elit velit eiusmod aute ex sit pariatur adipisicing cillum
            ipsum tempor labore dolor id ullamco. Id quis Lorem ut excepteur.
            Adipisicing ex consectetur quis ipsum ad elit.
          </p1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import FullCard from "@/components/FullCard";

export default {
  components: {},
};
</script>

<style scoped>
.header-img {
  width: 100%;
  z-index: 0;
}

.info {
  padding: 20pt;
  grid-column: 1fr;
}

.img-tile {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  opacity: 0.3;
  margin-bottom: 15pt;
}

.background {
  background-color: var(--midtone);
}

.header-text {
  margin: auto;
  align-content: center;
  text-align: center;
}

.header {
  background-color: var(--base);
}

.spacer {
  background-color: var(--base);
  height: 15vh;
}
</style>
