// // // FIX: Added the necessary React import
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   DragDropContext,
// //   Droppable,
// //   Draggable,
// //   DropResult,
// // } from "react-beautiful-dnd";
// // import { useAppContext } from "../context/AppContext";
// // import { Candidate } from "../types";

// // // The rest of the file is correct.

// // const pipelineColumns = ["Screening", "Interview", "Offer", "Hired"];

// // const CandidateCard = ({
// //   candidate,
// //   index,
// // }: {
// //   candidate: Candidate;
// //   index: number;
// // }) => {
// //   return (
// //     <Draggable draggableId={String(candidate.id)} index={index}>
// //       {(provided, snapshot) => (
// //         <div
// //           ref={provided.innerRef}
// //           {...provided.draggableProps}
// //           {...provided.dragHandleProps}
// //           className={`p-4 mb-3 rounded-lg shadow-md border-l-4 transition-all duration-300 ${
// //             snapshot.isDragging
// //               ? "bg-blue-100 dark:bg-blue-900/50 border-blue-500"
// //               : "bg-card border-transparent hover:border-primary/50"
// //           }`}
// //         >
// //           <h4 className="font-semibold">{candidate.name}</h4>
// //           <p className="text-sm text-muted-foreground">
// //             {candidate.skills.slice(0, 3).join(", ")}
// //           </p>
// //         </div>
// //       )}
// //     </Draggable>
// //   );
// // };

// // const PipelineColumn = ({
// //   title,
// //   candidates,
// // }: {
// //   title: string;
// //   candidates: Candidate[];
// // }) => {
// //   return (
// //     <div className="flex-1 min-w-[300px] bg-muted/50 rounded-lg p-4">
// //       <h3 className="font-bold text-lg mb-4 pb-2 border-b-2 border-primary/20">
// //         {title}{" "}
// //         <span className="text-base text-muted-foreground font-medium">
// //           ({candidates.length})
// //         </span>
// //       </h3>
// //       <Droppable droppableId={title}>
// //         {(provided, snapshot) => (
// //           <div
// //             {...provided.droppableProps}
// //             ref={provided.innerRef}
// //             className={`min-h-[400px] rounded-md transition-colors ${
// //               snapshot.isDraggingOver ? "bg-primary/10" : ""
// //             }`}
// //           >
// //             {candidates.map((candidate, index) => (
// //               <CandidateCard
// //                 key={candidate.id}
// //                 candidate={candidate}
// //                 index={index}
// //               />
// //             ))}
// //             {provided.placeholder}
// //           </div>
// //         )}
// //       </Droppable>
// //     </div>
// //   );
// // };

// // export const TalentPipelinePage = () => {
// //   const { candidates } = useAppContext();

// //   const initialColumns = {
// //     Screening: candidates.filter(
// //       (c) => c.status === "Active" && c.id % 3 === 0
// //     ),
// //     Interview: candidates.filter(
// //       (c) => c.status === "Active" && c.id % 3 === 1
// //     ),
// //     Offer: candidates.filter((c) => c.status === "Active" && c.id % 3 === 2),
// //     Hired: candidates.filter((c) => c.status === "Hired"),
// //   };

// //   const [columns, setColumns] = useState(initialColumns);

// //   const onDragEnd = (result: DropResult) => {
// //     const { source, destination } = result;
// //     if (!destination) return;

// //     // Note: Using any here is a simplification for this mock.
// //     // In a real app, you'd have stricter types.
// //     const sourceColumn = (columns as any)[source.droppableId];
// //     const destColumn = (columns as any)[destination.droppableId];
// //     const [removed] = sourceColumn.splice(source.index, 1);

// //     if (source.droppableId === destination.droppableId) {
// //       sourceColumn.splice(destination.index, 0, removed);
// //     } else {
// //       destColumn.splice(destination.index, 0, removed);
// //     }

// //     setColumns({
// //       ...columns,
// //       [source.droppableId]: sourceColumn,
// //       [destination.droppableId]: destColumn,
// //     });
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5 }}
// //     >
// //       <div className="mb-6">
// //         <h1 className="text-3xl font-bold">Talent Pipeline</h1>
// //         <p className="text-muted-foreground">
// //           Drag and drop candidates to update their stage in the hiring process.
// //         </p>
// //       </div>

// //       <DragDropContext onDragEnd={onDragEnd}>
// //         <div className="flex space-x-6 overflow-x-auto pb-4">
// //           {pipelineColumns.map((columnId) => (
// //             <PipelineColumn
// //               key={columnId}
// //               title={columnId}
// //               candidates={(columns as any)[columnId]}
// //             />
// //           ))}
// //         </div>
// //       </DragDropContext>
// //     </motion.div>
// //   );
// // };
// // FINAL, FULLY CORRECTED VERSION of src/pages/TalentPipelinePage.tsx

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   DndContext,
//   closestCenter,
//   PointerSensor,
//   useSensor,
//   useSensors,
//   DragEndEvent,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   useSortable,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// import { useAppContext } from "../context/AppContext";
// import { Candidate } from "../types";

// const pipelineColumns = ["Screening", "Interview", "Offer", "Hired"] as const;
// type PipelineColumnId = (typeof pipelineColumns)[number];

// // NEW: Sortable Candidate Card component using @dnd-kit
// const SortableCandidateCard = ({ candidate }: { candidate: Candidate }) => {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//     isDragging,
//   } = useSortable({ id: candidate.id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     zIndex: isDragging ? 10 : "auto",
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className={`p-4 mb-3 rounded-lg shadow-md border-l-4 transition-all duration-300 ${
//         isDragging
//           ? "bg-blue-100 dark:bg-blue-900/50 border-blue-500 scale-105"
//           : "bg-card border-transparent hover:border-primary/50"
//       }`}
//     >
//       <h4 className="font-semibold">{candidate.name}</h4>
//       <p className="text-sm text-muted-foreground">
//         {candidate.skills.slice(0, 3).join(", ")}
//       </p>
//     </div>
//   );
// };

// // NEW: Pipeline Column component adapted for @dnd-kit
// const PipelineColumn = ({
//   title,
//   candidates,
// }: {
//   title: PipelineColumnId;
//   candidates: Candidate[];
// }) => {
//   return (
//     <div className="flex-1 min-w-[300px] bg-muted/50 rounded-lg p-4">
//       <h3 className="font-bold text-lg mb-4 pb-2 border-b-2 border-primary/20">
//         {title}{" "}
//         <span className="text-base text-muted-foreground font-medium">
//           ({candidates.length})
//         </span>
//       </h3>
//       <SortableContext
//         items={candidates.map((c) => c.id)}
//         strategy={verticalListSortingStrategy}
//       >
//         <div className="min-h-[400px] rounded-md">
//           {candidates.map((candidate) => (
//             <SortableCandidateCard key={candidate.id} candidate={candidate} />
//           ))}
//         </div>
//       </SortableContext>
//     </div>
//   );
// };

// export const TalentPipelinePage = () => {
//   const { candidates: allCandidates } = useAppContext();

//   const initialColumns: Record<PipelineColumnId, Candidate[]> = {
//     Screening: allCandidates.filter(
//       (c) => c.status === "Active" && c.id % 3 === 0
//     ),
//     Interview: allCandidates.filter(
//       (c) => c.status === "Active" && c.id % 3 === 1
//     ),
//     Offer: allCandidates.filter((c) => c.status === "Active" && c.id % 3 === 2),
//     Hired: allCandidates.filter((c) => c.status === "Hired"),
//   };

//   const [columns, setColumns] = useState(initialColumns);
//   const sensors = useSensors(useSensor(PointerSensor));

//   const handleDragEnd = (event: DragEndEvent) => {
//     const { active, over } = event;

//     if (!over || active.id === over.id) {
//       return;
//     }

//     const activeContainer = findContainer(active.id);
//     const overContainer = findContainer(over.id);

//     if (!activeContainer || !overContainer) {
//       return;
//     }

//     setColumns((prev) => {
//       const activeItems = prev[activeContainer];
//       const overItems = prev[overContainer];

//       const activeIndex = activeItems.findIndex(
//         (item) => item.id === active.id
//       );
//       const overIndex = overItems.findIndex((item) => item.id === over.id);

//       let newColumns = { ...prev };

//       if (activeContainer === overContainer) {
//         newColumns[activeContainer] = arrayMove(
//           overItems,
//           activeIndex,
//           overIndex
//         );
//       } else {
//         const [movedItem] = activeItems.splice(activeIndex, 1);
//         overItems.splice(overIndex, 0, movedItem);
//         newColumns[activeContainer] = [...activeItems];
//         newColumns[overContainer] = [...overItems];
//       }
//       return newColumns;
//     });
//   };

//   const findContainer = (id: string | number): PipelineColumnId | undefined => {
//     if (typeof id !== "number") {
//       const numId = parseInt(String(id), 10);
//       if (isNaN(numId)) return undefined;
//       id = numId;
//     }

//     for (const columnName of pipelineColumns) {
//       if (columns[columnName].some((item) => item.id === id)) {
//         return columnName;
//       }
//     }
//     return undefined;
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold">Talent Pipeline</h1>
//         <p className="text-muted-foreground">
//           Drag and drop candidates to update their stage in the hiring process.
//         </p>
//       </div>

//       <DndContext
//         sensors={sensors}
//         collisionDetection={closestCenter}
//         onDragEnd={handleDragEnd}
//       >
//         <div className="flex space-x-6 overflow-x-auto pb-4">
//           {pipelineColumns.map((columnId) => (
//             <PipelineColumn
//               key={columnId}
//               title={columnId}
//               candidates={columns[columnId]}
//             />
//           ))}
//         </div>
//       </DndContext>
//     </motion.div>
//   );
// };
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useAppContext } from "../context/AppContext";
import { Candidate } from "../types";

const pipelineColumns = ["Screening", "Interview", "Offer", "Hired"] as const;
type PipelineColumnId = (typeof pipelineColumns)[number];

const SortableCandidateCard = ({ candidate }: { candidate: Candidate }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: candidate.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : "auto",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`p-4 mb-3 rounded-lg shadow-md border-l-4 transition-all duration-300 ${
        isDragging
          ? "bg-blue-100 dark:bg-blue-900/50 border-blue-500 scale-105"
          : "bg-card border-transparent hover:border-primary/50"
      }`}
    >
      <h4 className="font-semibold">{candidate.name}</h4>
      <p className="text-sm text-muted-foreground">
        {candidate.skills.slice(0, 3).join(", ")}
      </p>
    </div>
  );
};

const PipelineColumn = ({
  title,
  candidates,
}: {
  title: PipelineColumnId;
  candidates: Candidate[];
}) => {
  return (
    <div className="flex-1 min-w-[300px] bg-muted/50 rounded-lg p-4">
      <h3 className="font-bold text-lg mb-4 pb-2 border-b-2 border-primary/20">
        {title}{" "}
        <span className="text-base text-muted-foreground font-medium">
          ({candidates.length})
        </span>
      </h3>
      <SortableContext
        items={candidates.map((c) => c.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="min-h-[400px] rounded-md">
          {candidates.map((candidate) => (
            <SortableCandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export const TalentPipelinePage = () => {
  const { candidates: allCandidates } = useAppContext();

  const initialColumns: Record<PipelineColumnId, Candidate[]> = {
    Screening: allCandidates.filter(
      (c) => c.status === "Active" && c.id % 3 === 0
    ),
    Interview: allCandidates.filter(
      (c) => c.status === "Active" && c.id % 3 === 1
    ),
    Offer: allCandidates.filter((c) => c.status === "Active" && c.id % 3 === 2),
    Hired: allCandidates.filter((c) => c.status === "Hired"),
  };

  const [columns, setColumns] = useState(initialColumns);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const findContainer = (
    id: UniqueIdentifier
  ): PipelineColumnId | undefined => {
    for (const columnName of pipelineColumns) {
      if (columns[columnName].some((item) => item.id === id)) {
        return columnName;
      }
    }
    return undefined;
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const activeContainer = findContainer(active.id);
    const overContainer = findContainer(over.id as number);

    if (!activeContainer || !overContainer) return;

    setColumns((prev) => {
      const newColumns = { ...prev };
      const activeItems = newColumns[activeContainer];
      const overItems = newColumns[overContainer];

      const activeIndex = activeItems.findIndex(
        (item) => item.id === active.id
      );
      const overIndex = overItems.findIndex((item) => item.id === over.id);

      if (activeContainer === overContainer) {
        if (activeIndex !== overIndex) {
          newColumns[activeContainer] = arrayMove(
            overItems,
            activeIndex,
            overIndex
          );
        }
      } else {
        const [movedItem] = activeItems.splice(activeIndex, 1);
        overItems.splice(overIndex, 0, movedItem);
        newColumns[activeContainer] = [...activeItems];
        newColumns[overContainer] = [...overItems];
      }
      return newColumns;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Talent Pipeline</h1>
        <p className="text-muted-foreground">
          Drag and drop candidates to update their stage in the hiring process.
        </p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {pipelineColumns.map((columnId) => (
            <PipelineColumn
              key={columnId}
              title={columnId}
              candidates={columns[columnId]}
            />
          ))}
        </div>
      </DndContext>
    </motion.div>
  );
};
