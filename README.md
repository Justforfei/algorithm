# Algorithm

## 框架思维

从整体到细节， 自顶向下。 从抽象到具体

```C

// 数据遍历框架
void traverse(int[] arr) {
	for (int i=; i< arr.length; i++) {
		// 迭代访问arr[i]
	}
}

// 链表遍历框架
class ListNode {
	int val;
	ListNode next;
}
void traverse(ListNode head) {
	for(ListNode p = head; p != nul; p = p.next) {
		// 迭代访问p.va;
	}
}

void traverse(ListNode head) {
	// 递归访问 head.val
	traverse(head.next)
}

// 基本二叉树节点(二叉树遍历框架，典型的非线性递归遍历结构)

class TreeNode {
	int val;
	TreeNode left, right;
}

void traverse(TreeNode root) {
	traverse(root.left);
	traverse(root.right);
}

// 基本N叉树节点(二叉树框架可以扩展为 N 叉树的遍历框架)
class TreeNode {
	int val;
	TreeNode[] children
}

void traverse(TreeNode root) {
	for(TreeNode child: root.children) {
		traverse(child)
	}
}

// N 叉树的遍历又可以扩展为图的遍历，因为图就是好几 N 叉棵树的结合体。你说图是可能出现环的？这个很好办，用个布尔数组 visited 做标记就行了


// 二叉树的题目框架
void traverse(TreeNode root) {
    // 前序遍历
    traverse(root.left)
    // 中序遍历
    traverse(root.right)
    // 后序遍历
}

```

### 方法论

**只要涉及递归的问题，都是树的问题**

- 判断属于 前序/中序/后序遍历
- 套到框架代码中

动态规划
- 找状态转移方程

## 数据结构

### 存储方式

- 数组(顺序存储) 
	- 紧凑连续存储，可随机访问，通过索引快速查找，相对节约存储空间。
	- 但因为连续存储，内存空间需一次性分配够，如需扩容，需重新分配一块更大的空间,把数据全部复制过去，时间复杂度O(N)；对数组中间进行插入删除操作，必须搬移后面所有数据以保持连续，时间复杂度O(N)
- 链表(链式存储)
	- 元素不连续，需要靠指针指向下一个元素位置，不存在数组扩容问题。因为存储空间不连续，无法根据一个索引酸楚对应元素的地址，所以不能随机访问。由于每个元素必须存储指向前后元素位置的指针，会消耗很多的存储空间。

### 基本操作

- 遍历
- 访问

两种形式
- 线性 for/while迭代
- 非线性 递归

### 算法

#### 反转列表

### 其他

二分图： 任何一条边的两个顶点颜色不同

## 附录

### 算法优劣

#### 时间复杂度 T(n) 
> 定性描述算法的运行时间。代表算法输入值字符串长度的函数


常见的时间复杂度量级：(从上到下，时间复杂度越来越大，执行效率越来越低)
- 常数阶O(1)：没有循环等复杂结构
- 对数阶O(logN)：循环且条件n次方增加
- 线性阶O(n)：循环且条件线性增加
- 线性对数阶O(nlogN)：O(logN)循环N次
- 平方阶O(n²)：O(n) 嵌套
- 立方阶O(n³)：O(n) 循环三次
- K次方阶O(n^k): O(n) 循环K次
- 指数阶(2^n)：??

### 空间复杂度 S(n) 

- O(1): 算法执行所需要的临时空间不随着某个变量n的大小而变化
- O(n): ??