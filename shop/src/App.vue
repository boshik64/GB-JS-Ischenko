<template>
  <div class="container">
    <h2>Товары добавляются все разом в корзину и только после переоткрытия корзины.Так же и удаляются</h2>

    <!-- Корзина -->

    <button v-on:click="modalOpen">Корзина</button>

    <div class="modal" v-if="isModalOpened">
      <button v-on:click="modalClose" class="modal__close">X</button>

      <div class="items items--cart">
        <div v-bind:key="id" v-for="(item, id) of list" class="item">
          <img
            v-if="itemCart"
            v-bind:src="item.photo"
            alt=""
            class="item__photo"
          />
          <div v-if="itemCart" class="item__discription">
            {{ item.discription }}
          </div>
          <div v-if="itemCart" class="item__discriptionAlt">
            {{ item.discriptionAlt }}
          </div>
          <div v-if="itemCart" class="item__material">
            {{ "Материал: " + item.material }}
          </div>

          <button
            v-if="itemCart"
            v-on:click="removeFromCart(this)"
            class="item__add"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>

    <!-- Айтемы на странице -->
    <div class="items">
      <div v-bind:key="id" v-for="(item, id) of list" class="item">
        <img v-bind:src="item.photo" alt="" class="item__photo" />
        <div class="item__discription">{{ item.discription }}</div>
        <div class="item__discriptionAlt">{{ item.discriptionAlt }}</div>
        <div class="item__material">{{ "Материал: " + item.material }}</div>
        <button v-on:click="addToCart(this)" class="item__add">
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      isModalOpened: false,

      // cartList: [
      //   {
      //     itemCart: bool,
      //     discription: string,
      //     discriptionAlt: string,
      //     material: string,
      //     id: string,
      //     photo: string,
      //   },
      // ],

      list: [
        {
          itemCart: false,
          discription: "Бритва Т-образная",
          discriptionAlt: "Бритва Т-образная со сменными лезвиями.Многоразовая",
          material: "Латунь",
          id: "1",
          photo: "https://brandforman.ru/media/109/109774.jpg",
        },
        {
          itemCart: false,
          discription: "Помазок",
          discriptionAlt: "Помазок классический с деревянной ручкой",
          material: "Натуральная щетина, дерево.",
          id: "2",
          photo:
            "https://homelikeshaving.ru/image/catalog/Brush/HLS/White_Synthetic/C-S-W-F5/001.jpg",
        },
        {
          itemCart: false,
          discription: "Мыло для бритья",
          discriptionAlt:
            "Мыло для бриться классическое с ароматом чайного дерева и мяты",
          material: "Мыло, ментол, экстракт чайного дерева",
          id: "3",
          photo:
            "https://static.insales-cdn.com/images/products/1/1674/154904202/113.jpg",
        },
        {
          itemCart: false,
          discription: "Лезвия для бритья",
          discriptionAlt: "Лезвия для Т-образной бритвы 10шт",
          material: "Нержавеющая сталь",
          id: "4",
          photo:
            "https://бритва.рф/upload/resize_cache/iblock/4b8/1200_1200_1761e76bd7d42491fcc44c00e395cb04d/4b84b067966f154b736d5c17bf726b4a.jpg",
        },
      ],
    };
  },
  computed: {},
  mounted() {
    console.log("init");
  },
  methods: {
    //открыть \ закрыть модалку
    modalOpen() {
      this.isModalOpened = true;
    },
    modalClose() {
      this.isModalOpened = false;
    },

    // добавть \ убрать из корзины
    addToCart() {
      this.itemCart = true;
    },
    removeFromCart() {
      this.itemCart = false;
    },

    forceRerender() {
      this.id = 1;
    },
  },
};
</script>


<style lang="less">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.modal {
  width: 800px;
  height: 400px;
  background-color: rgb(99, 99, 99);
  border: 1px solid black;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  left: calc(50% - 400px); // 50% - половина ширины , чтобы выровнять по-центру
  padding: 20px;
  // opacity: 0.5;
}
.rect {
  margin: 20px auto;
  border: 2px solid blue;
}

.items {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
}
.item {
  text-align: center;
  max-width: 200px;
  background-color: #fff;
  border: 1px solid black;
  padding: 2px;
  .item__photo {
    max-width: 200px;
    height: 200px;
    // margin: 0 auto;
  }
  .item__discription {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .item__discriptionAlt {
    text-align: left;
    margin-bottom: 10px;
  }
  .item__material {
    text-align: left;
    margin-bottom: 10px;
  }
  .item__btn {
    text-align: right;
    // padding-top: 10px;
  }
}
</style>
