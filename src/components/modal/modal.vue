<template>
  <div class="modal_wrap">
    <transition name="slideUp" mode="in-out" class="modal_wrap">
      <div
        v-if="show"
        class="modal_body"
      >
        <div class="modal_inner">
          <div class="modal_hdr">
            <h3 v-if="data && data.length">
              {{data[0].interview_time.slice(0, -3) }} {{data[0].interview_date | moment("dd, DD, MMMM, YYYY")}}
              <slot name="titleExtend"/>
            </h3>
            <!--todo IF render btn-->
            <button
              v-if="data.length < office.records_count"
              @click="$emit('makeRecord')"
              class="main_btn"
              style="margin-left: auto; margin-right: 30px;">
              + Записать
            </button>
            <button class="close_btn" @click="$emit('close')">
              &#215;
            </button>
          </div>
          <div class="row_wrapper">

            <div
              v-if="data"
              v-for="(item, idx) in data"
              :key="item.id"
              class="modal_row"
            >
              <div class="cell name">
                {{++idx}}. {{item.name}} {{item.surname}}
              </div>
              <div class="cell">
                <a href="/file.pdf" class="download_icon"></a>
              </div>
              <div class="cell">
                <a href="/file.pdf" class="download_icon_v2"></a>
              </div>
              <div class="cell res">
                {{item.test_result}}
              </div>
              <div class="cell contact">
                <a :href="'tel:'+item.phone.replace(/(\s+)|(-)|(\()|(\))/g, '')">{{item.phone}}</a>
              </div>
              <div class="cell contact">
                <a :href="'mailto:'+item.email">{{item.email}}</a>
              </div>
              <div class="cell" style="text-align: right;">
                <button class="edit_btn" @click="$emit('editRecord', item)">
                  <svg width="20" height="20" aria-hidden="true" focusable="false" data-icon="pencil-alt"
                       role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                          d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      office: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal_wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .modal_body {
    padding: 30px 50px;
    box-shadow: 0 0 13px 0px #d5d5d5;
    background: #fff;
  }
  .modal_inner {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .row_wrapper {
    display: flex;
    flex-direction: column;
  }
  .modal_row {
    font-size: 14px;
    display: table;

    .cell {
      display: table-cell;
      vertical-align: middle;
      height: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 15px;
      padding-right: 15px;

      &:first-of-type {
        padding-left: 0;
      }
      &:last-of-type {
        padding-right: 0;
      }

      &.name {
        width: 20%;
      }
      &.res {
        width: 12%;
      }
      &.contact {
        width: 20%;
      }
    }
  }
  .download_icon {
    display: block;
    height: 16px;
    width: 16px;
    background-color: #003e7e;

    mask: url(./../../assets/download.svg) center no-repeat;
    mask-size: contain;

    transition: all .3s;

    &:hover {
      background-color: #00b7eb;
    }
  }

  .download_icon_v2 {
    display: block;
    height: 16px;
    width: 16px;
    background-color: #003e7e;

    mask: url(./../../assets/export.svg) center no-repeat;
    mask-size: contain;

    transition: all .3s;

    &:hover {
      background-color: #00b7eb;
    }
  }

  .edit_btn {
    background-color: transparent;
    border: none;
    cursor: pointer;

    path {
      transition: all .3s;
      fill: #a9a9a9;
    }

    &:hover {
      path {
        fill: #00b7eb;
      }
    }
    svg {
      width: 16px;
      height: 16px;
      transition: all .3s;
    }

  }
  .modal_hdr {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1,h2,h3,h4 {
      font-weight: 600;
    }
  }
  .close_btn {
    font-size: 16px;
    cursor: pointer;
    width: 26px;
    height: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #BFBFBF;
    border: 1px solid #BFBFBF;
    background: #fff;
    border-radius: 50%;

    transition: all .3s;

    margin-bottom: auto;

    &:hover {
      color: #000;
      border-color: #000;
    }
  }
</style>