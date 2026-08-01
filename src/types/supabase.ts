export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      animals: {
        Row: {
          id: string
          name: string
          description: string
          image_url: string
          display_order: number
          created_at?: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          image_url: string
          display_order: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          image_url?: string
          display_order?: number
          created_at?: string
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          id: string
          user_id: string | null
          animal_id: string
          found_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          animal_id: string
          found_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          animal_id?: string
          found_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_animal_id_fkey"
            columns: ["animal_id"]
            isOneToOne: false
            referencedRelation: "animals"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
