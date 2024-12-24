<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.ContactSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Heading tag="h2" size="lg">
		{slice.primary.heading}
	</Heading>
	<div class="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
		<div class="space-y-4">
			<div class="flex items-center gap-2">
				<span class="text-xl font-semibold text-slate-300">Email:</span>
				<a
					href="mailto:{slice.primary.gmail}"
					class="text-lg text-slate-400 hover:text-slate-200 transition-colors"
				>
					{slice.primary.gmail}
				</a>
			</div>
			<div class="flex items-center gap-2">
				<span class="text-xl font-semibold text-slate-300">Instagram:</span>
				<a
					href="https://instagram.com/{slice.primary.insta_id}"
					target="_blank"
					rel="noopener noreferrer"
					class="text-lg text-slate-400 hover:text-slate-200 transition-colors"
				>
					@{slice.primary.insta_id}
				</a>
			</div>
			<div class="flex items-center gap-2">
				<span class="text-xl font-semibold text-slate-300">Phone:</span>
				<a
					href="tel:{slice.primary.phone_number}"
					class="text-lg text-slate-400 hover:text-slate-200 transition-colors"
				>
					{slice.primary.phone_number}
				</a>
			</div>
		</div>
	</div>
</Bounded>
