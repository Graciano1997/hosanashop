export type Category = {
    id: number,
    name: string,
    description: string,
    status: boolean,
    parent_category_id: number | null,
    parent_category: string,
    created_at: string,
    updated_at: string
} 
