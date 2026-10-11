<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep this storefront frontend-only with session-scoped React state; no persistence or checkout services because it is a browsing demo.
- Centralize game catalog data in a browser-safe module and share storefront chrome through the root layout to keep navigation and sample labeling consistent.
- Use one dynamic game detail route for all catalog games, with distinct metadata per game, to keep top-up selection behavior consistent.
