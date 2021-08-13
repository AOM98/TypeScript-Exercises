import { toNamespacedPath } from "path";

class Node<T> {
  constructor(
    public value: T,
    public next?: Node<T> | undefined,
    public prev?: Node<T> | undefined
  ) {}
}

export default class LinkedList<T> {
  private head: Node<T> | undefined = undefined;
  private tail: Node<T> | undefined = undefined;
  private size: number = 0;

  // insert value at back
  public push(inputValue: T): void {
    let node = new Node(inputValue);
    //   if list is empty
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      // old tail is previous, new tale is created
      this.tail = new Node(inputValue, undefined, this.tail);
      // set old tale next to be the tail
      this.tail.prev!.next = this.tail;
    }
    this.size++;
  }

  // remove value at back
  public pop(): T {
    let result: T = this.tail!.value;
    if (this.size === 1) {
      this.tail = undefined;
      this.head = undefined;
    } else {
      this.tail = this.tail?.prev;
      this.tail!.next = undefined;
    }
    this.size--;

    return result;
  }

  // insert value at front
  public unshift(inputValue: T): void {
    let node = new Node(inputValue);
    //   if list is empty
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      // old tail is previous, new tale is created
      this.head = new Node(inputValue, this.head, undefined);
      // set old tale next to be the tail
      this.head.next!.prev = this.head;
    }
    this.size++;
  }

  // remove value at front
  public shift(): T | undefined {
    if (this.head == undefined) return undefined;
    let result: T = this.head!.value;
    if (this.size === 1) {
      this.tail = undefined;
      this.head = undefined;
    } else {
      this.head.next!.prev = undefined;
      this.head = this.head?.next;
    }
    this.size--;

    return result;
  }

  public count(): number {
    return this.size;
  }

  public delete(element: T): void {
    if (this.head?.value == element && this.size == 1) {
      this.head = undefined;
      this.tail = undefined;
      this.size--;
    } else {
      let temp = this.head;
      for (let i = 0; i < this.size; i++) {
        if (temp?.value == element) {
          temp.prev!.next = temp.next;
          temp.next!.prev = temp.prev;
          this.size--;
          break;
        }
        temp = temp?.next;
      }
    }
  }
}
