<template>
  <div class="panel">
    <div class="changes-list-container file-list">
      <VJstree
        :data="sampleData"
        :item-events="itemEvents"
        @item-click="itemClick" />
        <!-- :async="loadData" -->
    </div>
    <div></div>
  </div>
</template>

<script>
import VJstree from 'vue-jstree'

export default {
  components: {
    VJstree
  },
  data () {
    return {
      itemEvents: {
        mouseover: function () {
          // console.log('mouseover')
        },
        contextmenu: function () {
          console.log(arguments[2])
          arguments[2].preventDefault()
          console.log('contextmenu')
        }
      },
      sampleData: [
        {
          text: 'Same but with checkboxes',
          opened: true,
          children: [
            {
              text: 'initially selected',
              selected: true
            },
            {
              text: 'custom icon',
              icon: 'fa fa-warning icon-state-danger'
            },
            {
              text: 'initially open',
              icon: 'fa fa-folder icon-state-default',
              opened: open,
              children: [
                {
                  text: 'Another node',
                  isLeaf: false,
                  children: [

                  ]
                }
              ]
            },
            {
              text: 'custom icon',
              icon: 'fa fa-warning icon-state-warning'
            },
            {
              text: 'disabled node',
              icon: 'fa fa-check icon-state-success',
              disabled: true
            }
          ]
        },
        {
          text: 'And wholerow selection'
        }
      ]
    }
  },
  methods: {
    itemClick (node) {
      console.log(node.model.text + ' clicked !')
      console.log('node.model : ', node.model)
      const data = [
        { text: 'New Item 1...', isLeaf: false },
        { text: 'New Item 2...', isLeaf: false }
      ]
      console.log(data)
      // node.model.children = data
    },
    loadData (oriNode, resolve) {
      // console.log('loadData oriNode : ', oriNode)
      // console.log('loadData resolve : ', resolve)
      var id = oriNode.data.id ? oriNode.data.id : 0
      setTimeout(() => {
        let data = []
        if (id > 200) {
          data = []
        } else {
          data = [
            { text: 'New Item 1...' + id, isLeaf: id > 100 },
            { text: 'New Item 2...' + id, isLeaf: id > 100 }
          ]
        }
        resolve(data)
      }, 500)
    }
  }

}
</script>

<style>

</style>
