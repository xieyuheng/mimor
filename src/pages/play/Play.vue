<script setup lang="ts">
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import PlayForm from './PlayForm.vue'
import PlayModal from './PlayModal.vue'
import PlayPopup from './PlayPopup.vue'
import PlayPopupOfList from './PlayPopupOfList.vue'
</script>

<template>
  <PageLayout>
    <div class="flex flex-col space-y-10 p-3">
      <PlayPopup />

      <PlayPopupOfList />

      <PlayModal />

      <PlayForm />
    </div>
  </PageLayout>
</template>
