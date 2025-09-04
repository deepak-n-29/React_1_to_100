import React, { useRef } from "react";
import TodoItem from "./TodoItem";
import { useVirtualizer } from "@tanstack/react-virtual";

const TodoList = ({ todos, toggleTodo }) => {
    // console.log("Rendering TodoList");

    const parentScrollRef = useRef(null);
    const virtualizer = useVirtualizer({
        count: todos.length,
        getScrollElement: () => parentScrollRef?.current,
        estimateSize: () => 30,
        overscan: 5,
    });

    const virtualItems = virtualizer.getVirtualItems();
    const virtualHeight = virtualizer.getTotalSize();

    return (
        <div
            ref={parentScrollRef}
            className="fixed w-full h-[calc(100vh-16rem)] overflow-auto"
        >
            <div className="relative" style={{ height: `${virtualHeight}px` }}>
                <div
                    className="absolute top-0 left-0 w-full"
                    style={{
                        transform: `translateY(${
                            virtualItems[0]?.start ?? 0
                        }px)`, //Be careful with spacing here
                    }}
                >
                    {virtualItems.map((virtualItem) => {
                        const todo = todos[virtualItem.index];
                        return (
                            <div
                                data-index={virtualItem.index}
                                ref={virtualizer.measureElement}
                                key={virtualItem.key}
                            >
                                <TodoItem todo={todo} onToggle={toggleTodo} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default React.memo(TodoList);
