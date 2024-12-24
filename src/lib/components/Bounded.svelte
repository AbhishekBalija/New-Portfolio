<script lang="ts">
	export let tag = 'section';
	import clsx from 'clsx';
</script>

<svelte:element
	this={tag}
	{...$$restProps}
	class={clsx(`px-4 py-10 md:px-6 md:py-14 lg:py-16 `, $$props.class)}
>
	<div class="mx-auto w-full max-w-5xl"><slot /></div>
</svelte:element>
