<template>
  <PeachyGridTable>
    <PeachyTableHead>
      <PeachyGridTableRow>
        <PeachyGridTableHeadingCell>A</PeachyGridTableHeadingCell>
        <PeachyGridTableHeadingCell>B</PeachyGridTableHeadingCell>
        <PeachyGridTableHeadingCell>C</PeachyGridTableHeadingCell>
        <PeachyGridTableHeadingCell>D</PeachyGridTableHeadingCell>
      </PeachyGridTableRow>
    </PeachyTableHead>

    <PeachyTableBody>
      <PeachyGridTableRow v-for="i of 10" :key="i">
        <PeachyGridTableCell>{{ `A${i}` }}</PeachyGridTableCell>
        <PeachyGridTableCell>{{ `B${i}` }}</PeachyGridTableCell>
        <PeachyGridTableCell>{{ `C${i}` }}</PeachyGridTableCell>
        <PeachyGridTableCell>{{ `D${i}` }}</PeachyGridTableCell>
      </PeachyGridTableRow>
    </PeachyTableBody>
  </PeachyGridTable>
</template>

<script lang="ts" setup>
import { PeachyTableHead, PeachyTableBody } from "../../table";

import {
  PeachyGridTable,
  PeachyGridTableCell,
  PeachyGridTableHeadingCell,
  PeachyGridTableRow,
} from "../";
</script>

<style>
table {
  border-collapse: collapse;
}

td,
th {
  padding: 0.25em;
  border: 1px solid #eee;

  text-align: center;
  vertical-align: middle;

  &:focus {
    background-color: rgb(240, 240, 255);
    outline: 4px solid darkblue;
  }
}
</style>
