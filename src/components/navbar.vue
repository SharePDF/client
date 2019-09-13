<template>
  <div>
    <nav>
      <div class="brand">
        <div>
          <img src="assets/img/Share-PDF-logo-production.png" alt />
        </div>
      </div>
      <div class="profile">
        <div>
          <img
            src="https://gravatar.com/avatar/fae9df828dc356170d1c2ca78bfdfe3e?s=80"
            alt="profile picture"
          />
        </div>
      </div>
      <div class="dashboard-title">
        <h2>Dashboard</h2>
      </div>
      <div class="sidenav-items">
        <div>
          <i class="fas fa-file-pdf"></i>
          <p>New Share</p>
        </div>
        <div>
          <i class="fas fa-database"></i>
          <p>My Collections</p>
        </div>
        <div>
          <i class="fas fa-columns"></i>
          <p>Browse</p>
        </div>
        <div>
          <i class="fas fa-heart"></i>
          <p>Favorites</p>
        </div>
      </div>
      <div class="logout">
        <i class="fas fa-sign-out-alt"></i>
        <a href="#" @click.prevent="logout">Logout</a>
      </div>
    </nav>

    <!-- ----------------MODAL---------------------- -->

    <section id="modals">
      <div id="modal-create" class="modal">
        <form action id="create-pdf">
          <div class="modal-content">
            <div class="modal-header">
              <h2>Create</h2>
              <span class="close">&times;</span>
            </div>
            <div class="modal-form">
              <div id="modal-title">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" />
              </div>
              <div id="modal-description">
                <label for="description">Description</label>
                <textarea name="description" id="description"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit">Create</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
        

<style scoped>
/* CSS navbar */
nav,
nav div {
  display: flex;
}

nav {
  flex-direction: column;
  padding: 0 1vw;
  background-color: #224b8b;
  color: white;
  justify-content: flex-start;
}

.dashboard-title {
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid white;
  padding: 1vh 0;
}

.sidenav-items {
  flex-direction: column;
  flex-grow: 1;
}

.sidenav-items > div {
  padding: 1vh 1vw;
  border-radius: 20px;
  cursor: pointer;
}

.sidenav-items > div:hover {
  background-color: white;
  color: #224b8b;
}

.brand,
.profile {
  align-items: center;
  justify-content: space-around;
  margin: 1vh 0;
}

.brand {
  min-height: 8vh;
}

.brand img {
  max-height: 10vh;
}

.profile {
  min-width: 10vw;
}

.profile img {
  border-radius: 50%;
  margin: 0 1vw;
}

.profile p {
  flex-grow: 1;
  text-align: center;
}

.sidenav-items > div {
  margin: 1.5vh 0;
  display: flex;
  align-items: center;
}

.sidenav-items div i {
  padding: 0 2vw;
  width: 2em;
}

.sidenav-items div p {
  flex-grow: 1;
}

.logout {
  align-self: center;
  margin-bottom: 2vh;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px 5px;
  border-radius: 25px;
}

/* .logout a {
    color: white;
} */

/* .logout a:hover {
    background-color: white;
    color: #224b8b;
} */

.logout:hover {
  background-color: white;
  color: #224b8b;
}

/* -------------------------------------CSS MODAL CREATE PDF ------------------------------------ */

.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1000;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15vh auto;
  /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  /* Could be more or less, depending on screen size */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
  border-radius: 20px;
}

.modal-content > div {
  display: flex;
}

.modal-header,
.modal-footer {
  justify-content: space-between;
  align-content: center;
  padding-top: 1vh;
}

.modal-form {
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-evenly;
  align-items: stretch;
  border-bottom: 2px solid black;
  padding: 2vh 0;
  border-top: 2px solid black;
  /* border: 1px dashed black; */
}

.modal-form div {
  display: flex;
  /* flex-grow: 1; */
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  /* border: 1px dashed black; */
}

#modal-content {
  flex-grow: 1;
}

#modal-description {
  flex-grow: 2;
}

.modal-form div #description {
  flex-grow: 1;
}

/* The Close Button */
.close {
  color: #aaa;
  align-self: flex-start;
  font-size: 1.5em;
  /* border: 1px dashed black; */
}

.modal-header h2 {
  flex-grow: 1;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

#title {
  border-radius: 25px;
  height: 2em;
  padding-left: 1em;
  font-size: 1.1em;
}

#description {
  border-radius: 10px;
  padding-left: 1em;
  padding-top: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      formCreatePdf: {
        title: "",
        description: ""
      }
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$emit("loginCondition", false);
    },
    createPDF() {
      let token = localStorage.getItem("token");
      let { title, description } = this.formCreatePdf;
      axios({
        url: "http://localhost:3000/pdf",
        method: "POST",
        headers: { token }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(next);
    }
  }
};
</script>

<style>
</style>
