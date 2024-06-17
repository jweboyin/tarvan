# 开速上手

### 下载组件库

首先需要从公司私有gitlab上找到`czh-weapp`项目，通过git把组件库代码clone到本地。由于这个是公开文档，具体的仓库地址就不标明了，没账户的找frank开通。

### 本地安装编译

```bash
pnpm install && pnpm run build
```

如果要在本地开发者工具中预览demo的话，执行下面的命令:

```bash
pnpm run dev
```

### Pnpm Link

暂时还没有建立公司内部私有的npm库，所以使用link来把应用与组件库建立链接。后续有必要的话，会基于cnpm的私有化npm解决方案搭建一个供内部使用。

进入组件库根目录：

```bash
cd czh-weapp
```

通过pnpm link把组件库链接到全局的pnpm存储区，使得其他项目可以链接到它。

```bash
pnpm link --global
```

### 在应用里链接组件库

进入应用根目录下，执行link:

```bash
pnpm link --global czh-weapp
```

执行上述命令后，在应用的node_modules下会建立一个czh-weapp的软链接，这样就可以在应用里import了。

### 导入组件

```jsx
import { Button } from 'czh-weapp'

<Button type="primary">主要按钮</Button>
```

### 更新组件库

如果组件库有更新，直接git拉取后，再执行编译后，导入的就是最新版本的组件了。


