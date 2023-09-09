<?php

namespace App\View\Components;

use Illuminate\View\Component;

class HappyHarvestLogo extends Component
{
    public $imageUrl;

    public function __construct($imageUrl)
    {
        $this->imageUrl = $imageUrl;
    }

    public function render()
    {
        return view('components.happy-harvest-logo');
    }
}
    