import { Router, Request, Response } from 'express';

const router = Router();

router.get('/items', (req: Request, res: Response) => {
    const items: string[] = ['Item 1', 'Item 2', 'Item 3'];
    res.json(items);
});

export default router;