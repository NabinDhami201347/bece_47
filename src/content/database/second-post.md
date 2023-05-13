---
title: "Basics of Go"
description: "Think of a package as a collection of code files each ending in .go. A package is a way to group together related code. For example, the fmt package contains code for formatting text. The math package contains code for mathematical operations. The net/http package contains code for making HTTP requests."
pubDate: "Jul 22 2022"
heroImage: "/placeholder-hero.jpg"
---

```c
[Route("api/[controller]")]
[ApiController]
public class ItemsController : ControllerBase
{
    private readonly List<Item> _items = new List<Item>
    {
        new Item { Id = 1, Name = "Item 1" },
        new Item { Id = 2, Name = "Item 2" },
        new Item { Id = 3, Name = "Item 3" }
    };

    [HttpGet]
    public ActionResult<List<Item>> Get()
    {
        return _items;
    }
}
```
