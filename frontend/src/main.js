import { getOrCreateVisitId } from "./api/visit.js";
import { initResize } from "./layout/resize.js";
import { initFileDrop } from "./files/drop.js";

getOrCreateVisitId();
initResize();
initDragAndDrop();